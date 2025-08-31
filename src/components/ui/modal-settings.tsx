import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./button";
import { Settings } from "lucide-react";
import { Switch } from "./switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export default function ModalSettings() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="justify-start text-white">
          <Settings />
          <span>Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6">
          <div className="space-y-2">
            <h3 className="text-[13px] text-zinc-900 uppercase tracking-wide">
              Appearance
            </h3>
            <div className="flex items-center justify-between">
              <span>Light theme</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span>Font size</span>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[13px] text-zinc-900 uppercase tracking-wide">
              Security
            </h3>
            <div className="flex items-center justify-between">
              <span>Lock after</span>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="5 min" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 min</SelectItem>
                  <SelectItem value="5">5 min</SelectItem>
                  <SelectItem value="10">10 min</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <span>Require master password</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span>Hide passwords by default</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span>Clear clipboard after</span>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="10s" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5s</SelectItem>
                  <SelectItem value="10">10s</SelectItem>
                  <SelectItem value="30">30s</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[13px] text-zinc-900 uppercase tracking-wide">
              Shortcuts
            </h3>
            <div className="flex items-center justify-between">
              <span>Open/Close app</span>
              <kbd className="rounded bg-muted px-2 py-1 text-sm">
                Ctrl + Shift + S / ⌘ + Shift + S
              </kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>New password</span>
              <kbd className="rounded bg-muted px-2 py-1 text-sm">
                Ctrl + N / ⌘ + N
              </kbd>
            </div>
            <div className="flex items-center justify-between">
              <span>Copy password</span>
              <kbd className="rounded bg-muted px-2 py-1 text-sm">
                Ctrl + C / ⌘ + C
              </kbd>
            </div>
          </div>

          <div className="space-y-2">
            <Button variant="destructive">Reset settings</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
