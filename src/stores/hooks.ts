import { createTypedHooks } from 'easy-peasy'; // 👈import the helper
import { IStoreModel } from 'stores/model'; // 👈 import our model type

// Provide our model to the helper      👇
const typedHooks = createTypedHooks<IStoreModel>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;