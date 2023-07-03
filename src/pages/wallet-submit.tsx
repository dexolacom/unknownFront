import ConnectStepConfirm from '@/components/blocks/connect-step-confirm/connect-step-confirm';
import ConnectStepDiscordConnected from '@/components/blocks/connect-step-discord/connect-step-discord';
import ConnectStepFinish from '@/components/blocks/connect-step-finish/connect-step-finish';
import ConnectStepIndex from '@/components/blocks/connect-step-index/connect-step-index';
import ConnectStepVerification from '@/components/blocks/connect-step-verification/connect-step-verification';
import ButtonConnectDiscord from '@/components/elements/button-connect-discord/button-connect-discord';
import ButtonConnectWallet from '@/components/elements/button-connect-wallet/button-coonect-wallet';
import ConnectPageLayout from '@/components/layouts/connect-page-layout';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Wizard } from 'react-use-wizard';
const ConnectAnimationContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -400,
        rotateX: -45,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      exit={{
        opacity: 0,
        y: 400,
        rotateX: 45,
      }}
      style={{
        perspective: 1000,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};
export default function ConnectPage(): JSX.Element {
  const walletAddress = '0x493c4afb73b490e988650b9758e7736c72af748f';

  return (
    <ConnectPageLayout title="Connect">
      <Wizard startIndex={0} wrapper={<AnimatePresence mode="wait" />}>
        <ConnectAnimationContainer>
          <ConnectStepIndex />
        </ConnectAnimationContainer>

        <ConnectAnimationContainer>
          <ConnectStepDiscordConnected status="connected" />
        </ConnectAnimationContainer>

        <ConnectAnimationContainer>
          <ConnectStepDiscordConnected status="rejected" />
        </ConnectAnimationContainer>

        <ConnectAnimationContainer>
          <ConnectStepVerification />
        </ConnectAnimationContainer>

        <ConnectAnimationContainer>
          <ConnectStepConfirm />
        </ConnectAnimationContainer>

        <ConnectAnimationContainer>
          <ConnectStepFinish />
        </ConnectAnimationContainer>
      </Wizard>
    </ConnectPageLayout>
  );
}
