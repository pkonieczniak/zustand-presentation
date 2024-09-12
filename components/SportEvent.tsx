import { Flex, Paper, Image, Button } from '@mantine/core';
import { SportEventData } from '../types';

export function SportEvent({
  teamLeft,
  gameDate,
  teamLeftLogo,
  teamRight,
  teamRightLogo,
  tv,
}: SportEventData) {
  return (
    <Flex
      id={`${teamLeft}-${teamRight}`}
      component={Paper}
      align={'center'}
      style={{
        margin: '16px',
        color: 'black',
        padding: '8px',
      }}
      columnGap={'xl'}
    >
      <span
        style={{
          width: '15%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {tv}
      </span>
      <span style={{ width: '15%' }}>{gameDate}</span>
      <Flex gap={'xl'} align={'center'} flex={1}>
        <Image src={teamLeftLogo} width={'25px'} height={'25px'} />
        {teamLeft} - {teamRight}
        <Image src={teamRightLogo} width={'25px'} height={'25px'} />
      </Flex>
      <Button style={{ marginLeft: 'auto' }}>Szczegóły</Button>
    </Flex>
  );
}
