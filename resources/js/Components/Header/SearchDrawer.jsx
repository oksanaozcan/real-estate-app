import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/Components/ui/drawer";
import PrimaryButton from "../PrimaryButton";

export default function SearchDrawer({ isOpen, setIsOpen }) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <PrimaryButton>Submit</PrimaryButton>
          <DrawerClose asChild>
            <PrimaryButton variant="outline" onClick={() => setIsOpen(false)}>Cancel</PrimaryButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
