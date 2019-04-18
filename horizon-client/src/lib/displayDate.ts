import { distanceInWordsToNow } from "date-fns";

export function displayDate(date: Date) {
  return distanceInWordsToNow(date) + " ago";
}
