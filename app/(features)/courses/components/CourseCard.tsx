import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CourseCard() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden bg-neutral-800 border-none">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image
        src="https://avatar.vercel.sh/shadcn1"
        alt="course-name"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        width={500}
        height={400}
      />
      <CardHeader>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  );
}
