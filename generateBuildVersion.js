const getBuildVersion = () => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const builderNumberVersion = currentTimestamp;

    return { builderNumberVersion };
  };
  
import fs from 'fs/promises';
(async () => {
  const { builderNumberVersion } = getBuildVersion();
  await fs.writeFile('build-version.json', JSON.stringify({ builderNumberVersion }));
})();