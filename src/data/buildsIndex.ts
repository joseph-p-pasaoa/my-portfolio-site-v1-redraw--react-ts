import { KnownTech } from '../data/techIconsData';
import endeavorBase from './builds/endeavor';

const path = require('path');
const buildImagesPath = '/images/builds';

const importedBuilds = [
   endeavorBase,
];

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
   description: string;
   liveUrl?: string;
   repoUrl?: string;
   mainTechs: Array<KnownTech>;
   otherTechs?: Array<string>;
   obstacles?: string;
   wins?: string;
   features?: Array<string>;
   responsibilities?: string;
}

export interface InitialBuildObject extends BaseBuildObject {
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

      return {
         caption: imgObj.caption,
         largeSrc: finalSrc,
         thumbSrc: thumbSrc,
         note: imgObj.special ? imgObj.special : null
      };
   });

   return {...buildObj, imgs: finalImgs};
}

const builds = importedBuilds.map(base => buildImgs(base));


export default builds;
