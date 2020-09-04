import endeavorBase from './builds/endeavor';
const importedBuilds = [
   endeavorBase,
];

const path = require('path');
const buildImagesPath = '/images/builds';

interface BaseImageObject {
   caption: string;
   filename: string;
}

export interface DisplayImageObject {
   caption: string;
   thumbSrc: string;
   largeSrc: string;
}

interface BaseBuildObject {
   name: string;
   buildName: string,
   role?: string;
   description?: string;
   liveUrl?: string;
   repoUrl?: string;
   techs?: Array<string>;
   obstacles?: string;
   wins?: string;
   features?: Array<string>;
   responsibilities?: string;
}

interface InitialBuildObject extends BaseBuildObject {
   imgs: Array<BaseImageObject>;
}

export interface DisplayBuildObject extends BaseBuildObject {
   imgs: Array<DisplayImageObject>;
}


const buildImgs = (buildObj: InitialBuildObject): DisplayBuildObject =>  {
   const { buildName, imgs } = buildObj;

   const finalImgs = imgs.map(imgObj => {
      const finalSrc = path.join(
         buildImagesPath,
         buildName,
         imgObj.filename
      );
      const thumbSrc = path.join(
         buildImagesPath,
         buildName,
         't' + imgObj.filename
      );

      return ({
         caption: imgObj.caption,
         largeSrc: finalSrc,
         thumbSrc: thumbSrc
      })
   });

   return {...buildObj, imgs: finalImgs};
}

const builds = importedBuilds.map(base => buildImgs(base));


export default builds;
