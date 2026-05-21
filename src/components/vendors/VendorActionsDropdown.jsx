import React, { useState } from "react";
import { Edit3, Eye, MoreVertical, Trash2 } from "lucide-react";
import { toast } from "sonner";

const ACTIONS = [
  {
    label: "View",
    icon: Eye,
    toastMessage: (name) => `Viewing ${name} details is not available yet.`,
  },
  {
    label: "Edit",
    icon: Edit3,
    toastMessage: (name) => `Editing ${name} will be available soon.`,
  },
  {
    label: "Delete",
    icon: Trash2,
    toastMessage: (name) => `Delete action for ${name} is not available yet.`,
  },
];

const VendorActionsDropdown = ({ vendorName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = (action) => {
    toast(messageForAction(action, vendorName));
    setIsOpen(false);
  };

  const messageForAction = (action, name) => {
    const currentAction = ACTIONS.find((item) => item.label === action);
    return currentAction ? currentAction.toastMessage(name) : "Action is not available yet.";
  };

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-9 items-center justify-center rounded-lg   border-[var(--primary-color)]/30 bg-white px-3 text-[var(--primary-color)] transition   cursor-pointer"
      >
        <MoreVertical className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-20 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          {ACTIONS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => handleAction(label)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-50"
            >
              <Icon className="h-4 w-4 text-[var(--primary-color)]" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VendorActionsDropdown;
