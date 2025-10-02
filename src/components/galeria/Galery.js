import './galery.css';
// Este componente recebe o ID do álbum e é responsável por renderizá-lo
function ImgurGallery({ albumId }) {
    // Se não houver ID, não renderiza nada
    if (!albumId) {
        return null;
    }

    const embedUrl = `//imgur.com/a/${albumId}/embed?pub=true&w=540&h=500`;

    return (
        <iframe
            className="imgur-embed"
            width="540"
            height="500"
            frameBorder="0"
            src={embedUrl}
            title={`Imgur Album ${albumId}`}
        ></iframe>
    );
}

export default ImgurGallery;