interface RoundedListItemProps {
  itemNumber: number;
}

function RoundedListItem({ itemNumber }: RoundedListItemProps) {
  return (
    <div className="h-6 w-6 border-1 flex items-center justify-center rounded-full">
      <p className="text-center">{itemNumber}</p>
    </div>
  );
}

export default RoundedListItem;