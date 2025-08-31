import { Lock, Notebook, Shield, TriangleAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const activities = [
  { id: 1, text: "New password added - Gmail", type: "success", label: "New" },
  { id: 2, text: "Password updated - GitHub", type: "info", label: "Updated" },
  {
    id: 3,
    text: "Weak password detected - Facebook",
    type: "warning",
    label: "Weak",
  },
  {
    id: 4,
    text: "Duplicate password found - Twitter",
    type: "destructive",
    label: "Duplicate",
  },
  {
    id: 5,
    text: "Password shared - Dropbox",
    type: "secondary",
    label: "Shared",
  },
  {
    id: 6,
    text: "Password removed - LinkedIn",
    type: "outline",
    label: "Removed",
  },
  {
    id: 7,
    text: "New password added - Outlook",
    type: "success",
    label: "New",
  },
  { id: 8, text: "Password updated - Notion", type: "info", label: "Updated" },
];

export default function Overview() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-200 mb-2">Overview</h1>
        <p className="text-zinc-300">
          Security dashboard and password management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Passwords</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="text-2xl font-bold">127</p>
            <Lock className="text-blue-500" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weak Password</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="text-2xl font-bold">8</p>
            <TriangleAlert className="text-red-500" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Duplicated Password</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="text-2xl font-bold">3</p>
            <Notebook className="text-orange-500" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Secutiry Score</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="text-2xl font-bold">78%</p>
            <TriangleAlert className="text-green-500" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-60 pr-4">
            <div className="space-y-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between rounded-md border p-2"
                >
                  <span className="text-sm text-muted-foreground">
                    {activity.text}
                  </span>
                  <Badge variant={activity.type as any}>{activity.label}</Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
