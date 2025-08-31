import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { useEffect, useState } from "react";
import { listen } from "@tauri-apps/api/event";

export default function ModalPassword() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unlisten = listen("open-password-modal", () => {
      setOpen(true);
    });
    return () => {
      unlisten.then((f: () => void) => f());
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-zinc-300 text-zinc-900 hover:bg-zinc-700 hover:text-zinc-300"
          >
            Add Password
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Password</DialogTitle>
            <DialogDescription>
              Fill in the fields below to add a new password. Click save when
              you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Site/Service Name</Label>
              <Input
                id="name-1"
                name="name"
                placeholder="Ex: Gmail, Facebook"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="picture">Logo</Label>
              <Input
                id="picture"
                type="file"
                placeholder="Choose a logo file..."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username/Email</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="user@email.com"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password-1">Password</Label>
              <Input
                id="password-1"
                name="password"
                type="password"
                placeholder="••••••••"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save Password</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
