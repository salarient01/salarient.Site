import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import ITSolutions from "@/components/ITSolutions";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function ITServicesModal({ open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle>IT Services</DialogTitle>
          <DialogDescription>
            Managed IT, integrations, automation and AI solutions that keep your HR
            and payroll platforms secure, scalable and connected.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {/* Reuse the ITSolutions component but render with the 'IT Services' title */}
          <ITSolutions title="IT Services" description={"Managed IT, integrations, automation and AI solutions that keep your HR and payroll platforms secure, scalable and connected."} />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
