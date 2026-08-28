"use client";

import { useState } from "react";
import Button from "../Button/Button";
import { Handshake } from "lucide-react";
import Modal from "../Modal/Modal";
import CollaborationForm from "./Form";

export default function CollaborationButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <Button theme="primary" onClick={()=> setOpen(true)}>
        <Handshake size={20} />
        همکاری با من
      </Button>

      <Modal show={open} setShow={setOpen}>
        <CollaborationForm />
      </Modal>
    </div>
  );
}
