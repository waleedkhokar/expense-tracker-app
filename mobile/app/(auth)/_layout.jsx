// import { Redirect, Stack } from 'expo-router'
// import { useAuth } from '@clerk/clerk-expo'

// export default function AuthRoutesLayout() {
//   const { isSignedIn } = useAuth()

//   if (isSignedIn) {
//     return <Redirect href={'/'} />
//   }

//   return <Stack />
// }
import { Redirect, Stack } from 'expo-router'
// import { useAuth } from '@clerk/clerk-expo'  // 🔒 CLERK (needs dev build)

export default function AuthRoutesLayout() {
  // const { isSignedIn } = useAuth()  // 🔒 CLERK

  // if (isSignedIn) {
  //   return <Redirect href={'/'} />
  // }

  return <Stack />
}