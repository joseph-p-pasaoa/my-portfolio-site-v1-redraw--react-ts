import endeavorBase from './builds/endeavor';
const importedBuilds = [
   endeavorBase,
] as InitialBuildObject[];

const path = require('path');
const buildImagesPath = '/images/builds';

type SpecialImages = "animation";

interface BaseImgObject {
   caption: string;
   filename: string;
   special?: SpecialImages;
}

export interface ProcessedImgObject {
   caption: string;
   thumbSrc: string;
   largeSrc: string;
   note: SpecialImages | null;
}

interface BaseBuildObject {
   name: string;
   buildName: string;
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
   imgs: Array<BaseImgObject>;
}

export interface ProcessedBuildObject extends BaseBuildObject {
   imgs: Array<ProcessedImgObject>;
}


const buildImgs = (buildObj: InitialBuildObject): ProcessedBuildObject =>  {
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
