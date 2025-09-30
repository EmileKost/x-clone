import { ReactNode } from 'react';
import { text } from 'stream/consumers';

export const TermsAndConditions = () => {
  // TODO: Insert ReactNode function
  insertNodes(
    'Door je te registreren, ga je akkoord met de {{Algemene voorwaarden}} en het Privacybeleid, inclusief het gebruik van cookies.'
  );

  return <div>yolo</div>;
};

function insertNodes(text: string, nodes?: Record<string, ReactNode>) {
  const match = text.match(/\{\{(.*?)\}\}/);
  console.log(match);
}

// Door je te registreren, ga je akkoord met de {{Algemene voorwaarden}} en
// het {{Privacybeleid}}, {{inclusief het gebruik van cookies}}.
