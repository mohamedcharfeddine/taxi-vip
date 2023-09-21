import React from 'react';
import Accordion from './Accordion';

const AccordionGrid = () => {
  const accordionData = [
    {
      id: 1,
      title: 'Akzeptieren Sie Kreditkarten als Zahlungsmethode?',
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Ja, wir akzeptieren Kreditkarten als Zahlungsmethode für unsere Taxidienste in Mechelen. Wir bieten auch andere Zahlungsoptionen wie Bargeld und Debitkarten an.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: 'Welche Vorteile bietet das Nehmen eines Taxis in Mechelen?',
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Das Nehmen eines Taxis in Mechelen bietet verschiedene Vorteile wie Bequemlichkeit, Geschwindigkeit und Komfort. Sie müssen sich keine Gedanken über das Parken oder die Suche nach einem Parkplatz machen, und Sie werden direkt zu Ihrem Ziel gebracht.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: 'Kann ich ein Taxi für eine bestimmte Zeit buchen?',
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Ja, Sie können ein Taxi für eine bestimmte Zeit buchen. Bei der Reservierung können Sie die gewünschte Abholzeit angeben, damit wir sicherstellen können, dass zu Ihrem gewünschten Zeitpunkt ein Taxi verfügbar ist.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: 'Wie kann ich ein Taxi in Mechelen buchen?',
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Sie können ganz einfach ein Taxi in Mechelen bei uns telefonisch unter [Telefonnummer] oder online über unsere Website reservieren. Wir verfügen auch über eine mobile App, mit der Sie schnell und bequem ein Taxi buchen können.
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: 'Bieten Sie Taxitransporte zum und vom Flughafen in Mechelen an?',
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Ja, wir bieten Taxitransporte zum und vom Flughafen in Mechelen an. Wenn Sie ein Taxi benötigen, um Sie zum Flughafen zu bringen oder abzuholen, können Sie bei uns eine Reservierung vornehmen. Bitte geben Sie die relevanten Details wie Flugnummer und Ankunftszeit an, damit wir Ihnen einen reibungslosen Übergang ermöglichen können.
          </p>
        </>
      ),
    },
    {
      id: 6,
      title: 'Sind Ihre Taxis in Mechelen mit Klimaanlage ausgestattet?',
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Ja, alle unsere Taxis in Mechelen sind mit Klimaanlage ausgestattet. Wir möchten Ihnen eine komfortable und angenehme Fahrt bieten, unabhängig von der Witterung.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
      {accordionData.map((item) => (
        <Accordion key={item.id} {...item} />
      ))}
    </div>
  );
};

export default AccordionGrid;
