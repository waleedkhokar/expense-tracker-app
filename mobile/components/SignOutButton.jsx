// import { useClerk } from '@clerk/clerk-expo'
// import * as Linking from 'expo-linking'
// import { Text, TouchableOpacity } from 'react-native'

// export const SignOutButton = () => {
//   // Use `useClerk()` to access the `signOut()` function
//   const { signOut } = useClerk()
//   const handleSignOut = async () => {
//     try {
//       await signOut()
//       // Redirect to your desired page
//       Linking.openURL(Linking.createURL('/'))
//     } catch (err) {
//       // See https://clerk.com/docs/custom-flows/error-handling
//       // for more info on error handling
//       console.error(JSON.stringify(err, null, 2))
//     }
//   }
//   return (
//     <TouchableOpacity onPress={handleSignOut}>
//       <Text>Sign out</Text>
//     </TouchableOpacity>
//   )
// }

// import { useClerk } from '@clerk/clerk-expo'  // 🔒 CLERK (needs dev build)
// import { useClerk } from '@clerk/clerk-expo'  // 🔒 CLERK (needs dev build)
import * as Linking from 'expo-linking'
import { Text, TouchableOpacity } from 'react-native'

export const SignOutButton = () => {
  // const { signOut } = useClerk()  // 🔒 CLERK

  const handleSignOut = async () => {
    // 🔓 FAKE SIGN OUT (temporary — replace with Clerk when you get Android Studio)
    Linking.openURL(Linking.createURL('/'))

    // 🔒 CLERK CODE (kept for later — uncomment when you have dev build)
    /*
    try {
      await signOut()
      Linking.openURL(Linking.createURL('/'))
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
    */
  }

  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Text>Sign out</Text>
    </TouchableOpacity>
  )
}