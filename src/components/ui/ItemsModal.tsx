import { X } from "lucide-react";

interface Item {
  name: string;
  prices: number[];
}

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  items: Item[];
}

export default function ItemsModal({ open, onClose, title, items }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm">
      
      {/* popup */}
      <div className="w-full md:w-[850px] bg-background text-foreground rounded-t-3xl md:rounded-3xl p-7 shadow-2xl border border-border animate-in slide-in-from-bottom md:zoom-in-95">

        {/* header */}
        <div className="flex justify-between items-center mb-6 border-b border-border pb-3">
          <h2 className="text-3xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-2">

          {items.map((item, i) => {
            const validPrices = item.prices.filter(p => p > 0);

            // SINGLE PRICE
            if (validPrices.length === 1) {
              return (
                <div
                  key={i}
                  className="flex justify-between items-center bg-card p-4 rounded-xl border border-border hover:shadow-md transition"
                >
                  <span className="font-medium">{item.name}</span>
                  <span className="text-lg font-semibold text-primary">
                    ₹{validPrices[0]}
                  </span>
                </div>
              );
            }

            // MULTI PRICE
            return (
              <div
                key={i}
                className="bg-card p-4 rounded-xl border border-border hover:shadow-md transition"
              >
                <div className="font-medium mb-2">{item.name}</div>

                <div className="grid grid-cols-4 text-center text-sm">
                  {validPrices.map((price, idx) => (
                    <div key={idx}>
                      <div className="text-muted-foreground text-xs">
                        {["R","M","L","XL"][idx]}
                      </div>
                      <div className="text-primary font-semibold">
                        ₹{price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
