type Props = {
  onNextClick: () => void
  onBackClick: () => void
  isNextDisabled: boolean
  isBackDisabled: boolean
}

const PaginationLayout: React.FC<Props> = ({
  onBackClick,
  onNextClick,
  isNextDisabled,
  isBackDisabled,
}) => {
  return (
    <div className="button-container">
      <button onClick={onBackClick} disabled={isBackDisabled}>
        Back
      </button>
      <button onClick={onNextClick} disabled={isNextDisabled}>
        Next
      </button>
    </div>
  )
}

export default PaginationLayout
