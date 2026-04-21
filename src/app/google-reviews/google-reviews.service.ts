import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map, of, throwError } from "rxjs";
import { environment } from "../../environments/environment";

export interface GoogleReviewItem {
  authorName: string;
  rating: number;
  highlight: string;
  text: string;
}

export interface GoogleReviewsData {
  businessName: string;
  averageRating: number;
  reviewCount: number;
  googleBusinessUrl: string;
  reviews: GoogleReviewItem[];
}

interface GooglePlacesReviewResponse {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    authorAttribution?: { displayName?: string };
  }>;
}

const MOCK_REVIEWS_DATA: GoogleReviewsData = {
  businessName: "Make Ready Go",
  averageRating: 5.0,
  reviewCount: 7,
  googleBusinessUrl: environment.googleReviews.googleBusinessUrl,
  reviews: [
    {
      authorName: "Javier 8a",
      rating: 5,
      highlight: "Professional, respectful, and easy to work with.",
      text: "I had a great experience with this team, they came out to fix some A/C and plumbing issues at my home, and from the start they were professional, respectful, and easy to work with. They handled everything with care and attention to detail, and most importantly, everything was left working perfectly. More than just a service, it was a smooth and reassuring experience. Without a doubt, a team you can trust and one I would gladly hire again.",
    },
    {
      authorName: "Milien Garcia",
      rating: 5,
      highlight: "Responded fast and handled everything professionally.",
      text: "We had an emergency flood in our apartment, and Make Ready Go responded fast and handled everything professionally. They made a stressful situation much easier.",
    },
    {
      authorName: "Nilvia Sanchez",
      rating: 5,
      highlight: "Their response was prompt and reliable.",
      text: "I contacted Make Ready To Go for an urgent plumbing issue involving a broken water valve, their response was prompt and reliable. They quickly identified the problem and resolved it effectively, preventing further damage and ensuring everything was functioning properly before they left. In both situations, their professionalism, reliability, and quality of work stood out. The team was courteous, respectful of my property, and clearly experienced in handling different types of tasks. I would not hesitate to recommend Make Ready To Go to anyone in need of cleaning, maintenance, or repair services. They have consistently delivered excellent results and dependable service.",
    },
  ],
};

@Injectable({ providedIn: "root" })
export class GoogleReviewsService {
  private readonly http = inject(HttpClient);
  private readonly config = environment.googleReviews;

  getReviews(): Observable<GoogleReviewsData> {
    if (this.config.mode === "google-places") {
      return this.getGooglePlacesReviews();
    }

    return of(MOCK_REVIEWS_DATA);
  }

  private getGooglePlacesReviews(): Observable<GoogleReviewsData> {
    if (!this.config.placeId || !this.config.apiKey) {
      return throwError(() => new Error("Google reviews config is incomplete."));
    }

    const headers = new HttpHeaders({
      "X-Goog-Api-Key": this.config.apiKey,
      "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews,googleMapsUri",
    });

    return this.http
      .get<GooglePlacesReviewResponse>(
        `https://places.googleapis.com/v1/places/${this.config.placeId}`,
        { headers },
      )
      .pipe(map((response) => this.mapGooglePlacesResponse(response)));
  }

  private mapGooglePlacesResponse(response: GooglePlacesReviewResponse): GoogleReviewsData {
    return {
      businessName: response.displayName?.text?.trim() || "Google Reviews",
      averageRating: response.rating ?? 0,
      reviewCount: response.userRatingCount ?? 0,
      googleBusinessUrl: response.googleMapsUri || this.config.googleBusinessUrl,
      reviews: (response.reviews ?? [])
        .slice(0, 4)
        .map((review) => ({
          authorName: review.authorAttribution?.displayName?.trim() || "Google reviewer",
          rating: Math.max(0, Math.min(5, Math.round(review.rating ?? 0))),
          highlight: review.text?.text?.trim() || "Recent Google review",
          text: review.text?.text?.trim() || "Review text unavailable.",
        })),
    };
  }
}
