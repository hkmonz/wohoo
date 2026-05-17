import React, { useState } from "react";
import Tick from "../../assets/Icons/tick.svg";
import BookDemo from "../Commons/BookDemo";

export interface XSeriesCardProps {
  largeImages: string[];
  smallImages: string[];
  
  title: string;
  features: string[];
  
  soundLogo?: string;
  brandLogo?: string;
  tickIcon?: string;
  
  className?: string;
  maxWidth?: string;
  selectedImageIndex?: number;
  onImageSelect?: (index: number) => void;
  
  showBookDemo?: boolean;
  bookDemoButtonText?: string;
}

const XSeriesCard: React.FC<XSeriesCardProps> = ({
  largeImages,
  smallImages,
  title,
  features,
  soundLogo,
  brandLogo,
  tickIcon = Tick,
  className = "",
  maxWidth = "max-w-6xl",
  selectedImageIndex: externalSelectedIndex,
  onImageSelect,
  showBookDemo = true,
}) => {
  const [internalSelected, setInternalSelected] = useState(0);
  const [open, setOpen] = useState(false);

  const selected = externalSelectedIndex !== undefined ? externalSelectedIndex : internalSelected;
  
  const handleImageSelect = (index: number) => {
    if (onImageSelect) {
      onImageSelect(index);
    } else {
      setInternalSelected(index);
    }
  };

  return (
    <div className={`${maxWidth} w-full mx-auto ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
        <div className="flex-1 w-full">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#BDBDBD] p-5 shadow-sm">
            <div className="flex h-[14rem] items-center justify-center lg:h-[23rem]">
              <img
                src={largeImages[selected]}
                alt={`${title} large view ${selected + 1}`}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 pt-5">
              {smallImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleImageSelect(idx)}
                  aria-label={`Show product image ${idx + 1}`}
                  className={`rounded-[1.5rem] border-2 bg-white p-3 transition duration-300 ${
                    selected === idx
                      ? "border-indigo-600 shadow-lg"
                      : "border-transparent shadow-sm"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${title} thumbnail ${idx + 1}`}
                    className="h-20 w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="rounded-[2rem] p-6 sm:p-8">
            {soundLogo && (
              <div className="flex items-center justify-end mb-6">
                <img src={soundLogo} alt="Sound logo" className="h-10 w-auto" />
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-8">
              <div className="flex items-center gap-2">
                {brandLogo && (
                  <img src={brandLogo} alt="Brand logo" className="h-10 sm:h-12" />
                )}
                <span className="text-xl font-normal">{title}</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Key Features</h3>
              <ul className="mt-6 space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-slate-700">
                    <img src={tickIcon} alt="✔" className="mt-1 h-4 w-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {showBookDemo && <BookDemo open={open} onClose={() => setOpen(false)} />}
    </div>
  );
};

export default XSeriesCard;