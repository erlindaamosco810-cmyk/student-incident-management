import { supabase } from './supabase'

async function fetchData() {
  const { data, error } = await supabase.from('your_table_name').select('*')
  if (error) console.log('Error:', error)
  else console.log('Data:', data)
}

fetchData()
