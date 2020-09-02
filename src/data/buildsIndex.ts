import endeavorBase from './builds/endeavor';

const path = require('path');
const buildImagesPath = '/images/builds';

const buildImgs = (buildObj: any) => {   // DEV
   const { buildName, imgs } = buildObj;
   const finalImgs = imgs.map((imgObj: any) => {   // DEV
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
         src: finalSrc,
         thumbSrc: thumbSrc
      })
   });

   return {...buildObj, imgs: finalImgs};
}

const builds = [
   endeavorBase,
].map(base => buildImgs(base));


export default builds;
