"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import toast from "react-hot-toast";
import axios from "axios";

const ContactUs: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleContactUs = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      return toast.error("Please enter name");
    }

    if (!message.trim()) {
      return toast.error("Please enter message");
    }

    try {
      const response = await axios.post("/api/send", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setDialogOpen(false);
        toast.success(`Hi ${name}, message sent successfully`);
      }
    } catch (error) {
      console.log("error ", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <div className="my-10 flex justify-center">
          <Button className="cursor-pointer">Contact Us</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full px-5">
        <form onSubmit={handleContactUs}>
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>Fill out the contact form.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name."
                className="col-span-3"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter your email."
                className="col-span-3"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Message
              </Label>
              <Textarea
                id="message"
                className="col-span-3"
                placeholder="Enter your message."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="cursor-pointer">
              Send
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUs;
