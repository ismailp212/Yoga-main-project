import React, { useState } from "react";
import '../UploadVideo.css';


function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [language, setLanguage] = useState("");
  const [video, setVideo] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      title,
      description,
      level,
      language,
      video,
      thumbnail,
    });
  };

  return (
    <div>
      <div className="uplaod-page-logo-container">
    <h1>YOUGIK</h1>
    <p>L'espace parfait pour pratiquer votre loisir et réaliser votre passion</p>
    <button className="btn-live">Commencer un Live</button>
    </div>
      
    
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Titre</label>
       
          <p>Saisissez un titre vidéo approprié qui correspond au contenu que le spectateur est susceptible de regarder. Il est recommandé que le titre ne dépasse pas 10 mots.
          </p>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label>Description</label>
          <p>Entrez une description appropriée de la vidéo éducative expliquant les principaux sujets qui seront abordés dans la vidéo ainsi que quelques autres détails tels que les outils qui doivent être disponibles pour suivre la leçon.
          </p>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="lang-vid">
        <label className="niveu">Niveau </label>
        <div className="form-row-level">
          
          <p>Définissez l'une des options ci-dessous pour sélectionner le niveau d'exercice
          </p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="level"
                value="Debutant"
                checked={level === "Debutant"}
                onChange={(event) => setLevel(event.target.value)}
                required
              />
              Debutant
            </label>
            <label>
              <input
                type="radio"
                name="level"
                value="Intermediare"
                checked={level === "Intermediare"}
                onChange={(event) => setLevel(event.target.value)}
              />
              Intermediare
            </label>
            <label>
              <input
                type="radio"
                name="level"
                value="Avancee"
                checked={level === "Avancee"}
                onChange={(event) => setLevel(event.target.value)}
              />
              Avancee
            </label>
            <label>
              <input
                type="radio"
                name="level"
                value="Professionel"
                checked={level === "Professionel"}
                onChange={(event) => setLevel(event.target.value)}
              />
              Professionel
            </label>
          </div>
        </div>
        </div>
        <div className="lang-vid">
        <label className="language">Language</label>
        <div className="form-row-lang">
          <p>Définissez l'une des options ci-dessous pour sélectionner la langue de cours
          </p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="language"
                value="Francais"
                checked={language === "Francais"}
                onChange={(event) => setLanguage(event.target.value)}
                required
              />
              Francais
            </label>
            <label>
              <input
                type="radio"
                name="language"
                value="Anglais"
                checked={language === "Anglais"}
                onChange={(event) => setLanguage(event.target.value)}
              />
              Anglais
            </label>
            <label>
              <input
                type="radio"
                name="language"
                value="Espagnol"
                checked={language === "Espagnol"}
                onChange={(event) => setLanguage(event.target.value)}
              />
              Espagnol
            </label>
            <label>
              <input
                type="radio"
                name="language"
                value="Arabe"
                checked={language === "Arabe"}
                onChange={(event) => setLanguage(event.target.value)}
              />
              Arabe
            </label>
            </div>
            </div>
            </div>
    <div className="form-row">
      <label>Video</label>
      <p>Importez votre fichier vidéo au format mp4 ou mkv, et la qualité vidéo doit être de 1080p ou supérieure
      </p>

        <div className="custom-file-upload">
          <input
            type="file"
            id="video-upload"
            accept="video/*"
            onChange={(event) => setThumbnail(event.target.files[0])}
            required
          />
          <label htmlFor="video-upload">Importrez la video</label>
        </div>
    
    </div>
    <div className="form-row">
      <label>Miniature</label>
      <p>Importez l'image miniature de votre vidéo. Cette image est celle qui apparaît sur la vidéo avant sa lecture. Il doit s'agir d'une image attrayante pour le visiteur, de haute qualité et adaptée au contenu de la vidéo.
</p>

          <div className="custom-file-upload">
          <input
            type="file"
            id="thumbnail-upload"
            accept="image/*"
            onChange={(event) => setThumbnail(event.target.files[0])}
            required
          />
          <label htmlFor="thumbnail-upload">Importrez la miniature</label>
        </div>
      
    </div>
    <div className="btn-submit">
      <button type="submit">Valider</button>
    </div>
  </form>
</div>

</div>
);
}

export default UploadVideo;
