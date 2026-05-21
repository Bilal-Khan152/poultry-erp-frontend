import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchInput = ({
  placeholder = "Search...",
  value = "",
  onChange = () => {},
  maxLength = 300,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex-1 max-w-md">
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
          isFocused
            ? "border-[var(--primary-color)] shadow-md"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <Search className="h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={maxLength}
          className="flex-1 bg-transparent outline-none text-sm placeholder-slate-400"
        />
        {maxLength && (
          <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
