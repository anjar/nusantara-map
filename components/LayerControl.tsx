'use client';
import { useState, useRef, useEffect } from 'react';
import { Layers3 } from 'lucide-react';

export interface LayerSettings {
  // Lapisan Sejarah
  realms: boolean;
  cities: boolean;
  events: boolean;

  // Terrain & Modern Reference
  provinceNames: boolean;
}

interface LayerControlProps {
  layers: LayerSettings;
  onChange: (layers: LayerSettings) => void;
}

export default function LayerControl({ layers, onChange }: LayerControlProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside or Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const toggle = (key: keyof LayerSettings) => {
    onChange({
      ...layers,
      [key]: !layers[key],
    });
  };

  return (
    <div className="layer-popover-container" ref={containerRef}>
      <button
        type="button"
        className={`layers-trigger-btn ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        title="Pilih layer peta historis dan geografis"
      >
        <Layers3 size={15} className="layers-icon" />
        <span>Lapisan</span>
        <span className="layers-caret">{open ? '▴' : '▾'}</span>
      </button>

      {open && (
        <div className="layers-dropdown-card" role="dialog" aria-label="Pengaturan Layer Peta">
          <div className="layers-section">
            <h4 className="layers-section-title">Lapisan Sejarah</h4>
            <div className="layers-chips-grid">
              <button
                type="button"
                className={`layer-chip ${layers.realms ? 'selected' : ''}`}
                onClick={() => toggle('realms')}
                title="Tampilkan wilayah kekuasaan kerajaan &amp; kesultanan"
              >
                {layers.realms && <span className="layer-check">✓ </span>}
                Kerajaan
              </button>

              <button
                type="button"
                className={`layer-chip ${layers.cities ? 'selected' : ''}`}
                onClick={() => toggle('cities')}
                title="Tampilkan kota &amp; permukiman kuno dari SM s/d modern"
              >
                {layers.cities && <span className="layer-check">✓ </span>}
                Kota
              </button>

              <button
                type="button"
                className={`layer-chip ${layers.events ? 'selected' : ''}`}
                onClick={() => toggle('events')}
                title="Tampilkan peristiwa sejarah pada linimasa"
              >
                {layers.events && <span className="layer-check">✓ </span>}
                Peristiwa
              </button>
            </div>
          </div>

          <div className="layers-divider" />

          <div className="layers-section">
            <h4 className="layers-section-title">Geografi dan Referensi Modern</h4>
            <div className="layers-chips-grid">
              <button
                type="button"
                className={`layer-chip ${layers.provinceNames ? 'selected' : ''}`}
                onClick={() => toggle('provinceNames')}
                title="Tampilkan toponim nama provinsi Indonesia"
              >
                {layers.provinceNames && <span className="layer-check">✓ </span>}
                Nama Provinsi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
