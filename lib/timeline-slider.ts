/**
 * Piecewise non-linear mapping between calendar year and slider position (0..10000).
 * Ensures that both prehistoric geological eras (-20.000 to 0) and dense historical
 * kingdom/colonial/republic eras (400 to 2026) have generous track resolution and
 * stay 100% in sync with the visual era milestone buttons below the slider.
 */

export const SLIDER_MAX_STEPS = 10000;

function anchorPosition(index: number, count: number): number {
  const earlyPositions = [0, 250, 500, 750, 1200];
  if (index < earlyPositions.length) return earlyPositions[index];
  return Math.round(1200 + (index - 4) * 8800 / (count - 5));
}

export function getAnchors(currentYear: number = 2026): number[] {
  return [
    -20000, // Puncak Zaman Es Maksimum (LGM)
    -14600, // Meltwater Pulse 1A
    -11500, // Akhir Pleistosen / Awal Holosen
    -8000,  // Pemisahan Sahul & Karimata
    400,    // Prasasti Yupa Kutai & Tarumanagara
    700,    // Kedatuan Sriwijaya
    1000,   // Kerajaan Medang / Mataram Kuno
    1294,   // Berdirinya Majapahit
    1350,   // Puncak Kejayaan Majapahit (Hayam Wuruk & Gajah Mada)
    1500,   // Era Kesultanan Demak & Masuknya Islam
    1602,   // Pembentukan VOC
    1755,   // Perjanjian Giyanti (Surakarta & Yogyakarta)
    1825,   // Perang Diponegoro (Perang Jawa)
    1900,   // Pax Neerlandica Hindia Belanda
    1942,   // Pendudukan Jepang (Gunseikanbu)
    1945,   // Proklamasi Kemerdekaan RI 🇮🇩
    currentYear // Masa Kini
  ];
}

export function yearToSliderPos(year: number, anchors: number[]): number {
  const n = anchors.length;
  if (n < 2) return 0;
  if (year <= anchors[0]) return 0;
  if (year >= anchors[n - 1]) return SLIDER_MAX_STEPS;

  for (let i = 0; i < n - 1; i++) {
    const a0 = anchors[i];
    const a1 = anchors[i + 1];
    if (year >= a0 && year <= a1) {
      const frac = (year - a0) / (a1 - a0);
      const start = anchorPosition(i, n);
      const end = anchorPosition(i + 1, n);
      return Math.round(start + frac * (end - start));
    }
  }
  return 0;
}

export function sliderPosToYear(pos: number, anchors: number[]): number {
  const n = anchors.length;
  if (n < 2) return anchors[0] || 0;
  if (pos <= 0) return anchors[0];
  if (pos >= SLIDER_MAX_STEPS) return anchors[n - 1];

  let i = 0;
  while (i < n - 2 && pos > anchorPosition(i + 1, n)) i++;
  const start = anchorPosition(i, n);
  const end = anchorPosition(i + 1, n);
  const frac = (pos - start) / (end - start);
  let y = Math.round(anchors[i] + frac * (anchors[i + 1] - anchors[i]));
  if (y === 0) y = 1; // No year 0 in historical chronology
  return y;
}
