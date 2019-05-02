import { distanceInWordsToNow, format } from "date-fns";

export function displayDate(date: Date) {
  return distanceInWordsToNow(date) + " ago";
}

export function neatDate(date: Date) {
  return format(date, "Do MMMM YYYY");
}
