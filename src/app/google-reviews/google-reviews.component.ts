import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { GoogleReviewsData, GoogleReviewsService } from "./google-reviews.service";

type ReviewsStatus = "loading" | "loaded" | "empty" | "error";

@Component({
  selector: "app-google-reviews",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: "./google-reviews.component.html",
  styleUrls: ["./google-reviews.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleReviewsComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly reviewsService = inject(GoogleReviewsService);

  status: ReviewsStatus = "loading";
  reviewsData: GoogleReviewsData | null = null;

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.status = "loading";
    this.reviewsData = null;

    this.reviewsService
      .getReviews()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.reviewsData = data;
          this.status = data.reviews.length > 0 ? "loaded" : "empty";
        },
        error: () => {
          this.status = "error";
        },
      });
  }

  reviewStars(rating: number): number[] {
    return Array.from({ length: Math.max(0, Math.min(5, rating)) }, (_, index) => index);
  }

  reviewEmptyStars(rating: number): number[] {
    return Array.from({ length: Math.max(0, 5 - Math.max(0, Math.min(5, rating))) }, (_, index) => index);
  }
}
