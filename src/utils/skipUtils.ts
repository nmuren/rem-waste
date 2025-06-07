import type { ISkipOption, ISkipOptionApiResponse } from "../interfaces/skip";

export const skipApiResponseToSkip = (item: ISkipOptionApiResponse): ISkipOption => ({
  allowedOnRoad: item.allowed_on_road,
  hirePeriodDays: item.hire_period_days,
  id: item.id,
  priceBeforeVat: item.price_before_vat,
  size: item.size,
});

export const getSkipImageUrl = (skipSize: number) =>
  `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skipSize}-yarder-skip.jpg`;
