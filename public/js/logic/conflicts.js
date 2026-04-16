/**
 * Check if two time ranges overlap.
 * times are "HH:MM" 24h strings.
 */
export function timesOverlap(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && bStart < aEnd;
}

/**
 * Check if an item conflicts with any in a list.
 * item: { days: ["Mon","Wed"], startTime, endTime }
 */
export function hasConflict(item, allItems) {
  return allItems.some(other =>
    other.id !== item.id &&
    other.days.some(d => item.days.includes(d)) &&
    timesOverlap(item.startTime, item.endTime, other.startTime, other.endTime)
  );
}
