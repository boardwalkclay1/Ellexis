export function timesOverlap(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && bStart < aEnd;
}

export function hasConflict(item, allItems) {
  return allItems.some(other =>
    other.id !== item.id &&
    other.days?.some(d => item.days?.includes(d)) &&
    timesOverlap(item.startTime, item.endTime, other.startTime, other.endTime)
  );
}
