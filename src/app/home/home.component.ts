import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly heroPoints = [
    "Serving San Antonio and surrounding communities",
    "Built for apartment communities and property teams",
    "Clear quotes and responsive follow-through",
  ];

  readonly metrics = [
    { value: "24/7", label: "outsourcing support for busy property teams" },
    { value: "Fast", label: "turn execution without vendor chasing" },
    { value: "Clear", label: "communication from request to completion" },
  ];

  readonly proofItems = [
    {
      icon: "schedule",
      title: "Faster path to move-in ready",
      description: "Reduce delay and keep units moving toward lease-ready condition.",
    },
    {
      icon: "verified_user",
      title: "More confidence in the process",
      description: "Know the scope, pricing, and next steps without constant follow-up.",
    },
    {
      icon: "apartment",
      title: "Built for multifamily operations",
      description: "Support designed around property managers, apartment teams, and occupancy pressure.",
    },
    {
      icon: "support_agent",
      title: "Professional communication",
      description: "Dependable updates and responsive service that reflect well on your team.",
    },
  ];

  readonly steps = [
    {
      title: "Tell us what needs to be turned",
      description:
        "Share the unit details, property address, and your timeline through the quote form.",
    },
    {
      title: "Get a clear quote quickly",
      description:
        "We review the request and respond with straightforward pricing and scope.",
    },
    {
      title: "Turn the unit and keep leasing moving",
      description:
        "Our team handles the work so your staff can stay focused on operations and resident experience.",
    },
  ];

  readonly services = [
    { icon: "home_repair_service", label: "Full-service make ready turns" },
    { icon: "delete_sweep", label: "Trash out and debris removal" },
    { icon: "park", label: "Grounds and exterior presentation" },
    { icon: "night_shelter", label: "Trash valet support" },
    { icon: "local_shipping", label: "Appliance moving and setup" },
  ];

  readonly faqs = [
    {
      question: "Who is Make Ready Go for?",
      answer:
        "We work with property managers, apartment communities, and multifamily teams that need units turned quickly and professionally.",
    },
    {
      question: "What makes your service different?",
      answer:
        "We focus on speed, communication, and dependable follow-through so your team spends less time chasing vendors and more time leasing units.",
    },
  ];
}
