import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, onSelect, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails

  const classActive = isActive ? '' : 'thumb-active'

  const onThumbnail = () => {
    onSelect(id)
  }

  return (
    <li className="thumb-container">
      <button className="btn-style" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onThumbnail}
          className={classActive}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
