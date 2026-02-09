"use client";

import { Tiptap } from "@/components/TipTap";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export function TheoryBlock({
  lessonName,
  theory,
}: {
  lessonName: string;
  theory: string;
}) {
  return (
    <Card className="w-full px-8 py-4">
      <CardHeader>
        <h1 className="font-heading text-2xl text-center">{lessonName}</h1>
      </CardHeader>
      <hr className="bg-primary"></hr>
      <CardDescription>
        <Tiptap editable={false} />
      </CardDescription>
    </Card>
  );
}
