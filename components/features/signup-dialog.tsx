"use client";

import * as React from "react";
import { GraduationCap, Home } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SignupDialogProps {
  children: React.ReactNode;
}

export function SignupDialog({ children }: SignupDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleStudentClick = () => {
    window.open("https://forms.gle/1zBXjhhCE58AeTK78", "_blank");
    setOpen(false);
  };

  const handleHostClick = () => {
    window.open("https://forms.gle/5t7WxJZydsZJJKRX6", "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join International Friends</DialogTitle>
          <DialogDescription>
            Choose the application that best describes you. We&apos;re excited
            to welcome you to our community!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            size="lg"
            className="h-auto py-6 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5"
            onClick={handleStudentClick}
          >
            <GraduationCap className="w-8 h-8 text-primary" />
            <div className="text-center">
              <div className="font-display font-semibold">
                I&apos;m a Student
              </div>
              <div className="text-sm text-muted-foreground font-body normal-case tracking-normal">
                International student at University of Arizona
              </div>
            </div>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-auto py-6 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5"
            onClick={handleHostClick}
          >
            <Home className="w-8 h-8 text-primary" />
            <div className="text-center">
              <div className="font-display font-semibold">I&apos;m a Host</div>
              <div className="text-sm text-muted-foreground font-body normal-case tracking-normal">
                Local community member in Southern Arizona
              </div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
