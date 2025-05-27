"use client";
import * as React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

interface SpotterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

export function SpotterModal({
  open,
  onOpenChange,
  title = "AI-Powered Insights",
  description = "Spotter.ai delivers actionable analytics with a modern, intuitive experience.",
  children,
  primaryAction = { label: "Get Started", onClick: () => {} },
  secondaryAction = { label: "Learn More", onClick: () => {} },
}: SpotterModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full rounded-2xl p-0 border-none shadow-2xl bg-white dark:bg-[#181A20]">
        <Card className="bg-white dark:bg-[#181A20] border-none shadow-none p-0">
          <CardContent className="p-8 flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
              onClick={() => onOpenChange(false)}
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-6">
              <Image
                src="/spotter-logo.svg"
                alt="Spotter.ai Logo"
                width={48}
                height={48}
                className="rounded-xl"
                priority
              />
            </div>
            <DialogHeader className="items-center text-center mb-2">
              <DialogTitle className="text-2xl font-bold text-[#1A1A1A] dark:text-white font-sans tracking-tight">
                {title}
              </DialogTitle>
              <DialogDescription className="text-base text-[#4B5563] dark:text-gray-300 mt-2">
                {description}
              </DialogDescription>
            </DialogHeader>
            {children && <div className="w-full mt-4">{children}</div>}
            <DialogFooter className="flex flex-col gap-2 w-full mt-8">
              <Button
                className="w-full bg-[#2D7FF9] hover:bg-[#1A5FCC] text-white font-semibold text-base py-2 rounded-lg shadow-sm"
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#E5E7EB] text-[#2D7FF9] hover:bg-[#F5F6FA] font-semibold text-base py-2 rounded-lg"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.label}
              </Button>
            </DialogFooter>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
