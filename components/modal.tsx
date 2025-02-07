"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { useEffect } from "react";

const MODAL_EXPIRATION_KEY = "modalExpiration";
const MODAL_SHOWN_KEY = "seenModal";

const InfoModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const expiration = localStorage.getItem(MODAL_EXPIRATION_KEY);
    const now = new Date().getTime();
    const hasSeenModal = sessionStorage.getItem(MODAL_SHOWN_KEY);

    if (!hasSeenModal && (!expiration || now > Number(expiration))) {
      onOpen();
      localStorage.setItem("seenModal", "true");
      sessionStorage.setItem(MODAL_SHOWN_KEY, "true"); // Clears on tab close
      localStorage.setItem(
        MODAL_EXPIRATION_KEY,
        (now + 24 * 60 * 60 * 1000).toString()
      );
    }
  }, []);

  return (
    <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Important information
            </ModalHeader>
            <ModalBody>
              <p className="text-xl text-red-600">
                This site is under development. We are updating text, images,
                and content. Please do not consider the current content as
                final.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;
