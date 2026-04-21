import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { GoogleReviewsComponent } from "../google-reviews/google-reviews.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
    GoogleReviewsComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly heroPoints = [
    "Built for apartment communities and property managers",
    "Fast support for vacant units and tight turn windows",
    "Clear pricing, updates, and next steps",
  ];

  readonly metrics = [
    { value: "24/7", label: "support for busy property teams" },
    { value: "Fast", label: "unit-turn help without vendor chasing" },
    { value: "Clear", label: "communication from quote to completion" },
  ];

  readonly proofItems = [
    {
      icon: "schedule",
      title: "Turn units faster",
      description: "Keep vacant units moving toward make-ready and move-in without unnecessary delay.",
    },
    {
      icon: "verified_user",
      title: "Know what is happening",
      description: "Get clear scope, pricing, and next steps instead of chasing for updates.",
    },
    {
      icon: "apartment",
      title: "Built for multifamily teams",
      description: "Designed around occupancy pressure, leasing deadlines, and property operations.",
    },
    {
      icon: "support_agent",
      title: "Professional follow-through",
      description: "Responsive service that helps your team look organized and in control.",
    },
  ];

  readonly trustStats = [
    { value: "500+", label: "units supported across make-ready and turn services" },
    { value: "24-48 hr", label: "typical response window for active turn needs" },
    { value: "San Antonio", label: "service area for apartment communities and multifamily teams" },
  ];

  readonly benefits = [
    {
      icon: "bolt",
      title: "Quick response when units open up",
      description: "Move from vacancy to action faster with a team that is built around apartment turn timelines.",
    },
    {
      icon: "chat",
      title: "Fewer update requests from your office",
      description: "Clear scope, communication, and next steps help your staff spend less time chasing vendors.",
    },
    {
      icon: "fact_check",
      title: "Work that supports leasing readiness",
      description: "Cleaner presentation and dependable follow-through help units show better and get back on the market sooner.",
    },
  ];

  readonly sectionPoints = [
    "Cleaner units that are ready to show sooner",
    "Clear updates without constant vendor follow-up",
    "Reliable support during busy leasing windows",
  ];

  readonly steps = [
    {
      title: "Send the unit and service details",
      description:
        "Tell us the property, the service needed, and your timeline through the quote form.",
    },
    {
      title: "Review a clear quote",
      description:
        "We follow up with straightforward pricing, scope, and next steps.",
    },
    {
      title: "Get the turn moving",
      description:
        "Our team handles the work so your staff can stay focused on leasing, residents, and operations.",
    },
  ];

  readonly services = [
    { icon: "home_repair_service", label: "Full-service apartment make ready turns" },
    { icon: "delete_sweep", label: "Trash out and bulk debris removal" },
    { icon: "park", label: "Grounds cleanup and exterior presentation" },
    { icon: "night_shelter", label: "Trash valet support for apartment communities" },
    { icon: "local_shipping", label: "Appliance moving and setup support" },
  ];

  readonly faqs = [
    {
      question: "Who is Make Ready Go for?",
      answer:
        "We work with property managers, apartment communities, and multifamily teams that need vacant units turned quickly and professionally.",
    },
    {
      question: "What makes your service different?",
      answer:
        "We focus on speed, clear communication, and dependable follow-through so your team spends less time chasing vendors and more time getting units leased.",
    },
  ];
}
