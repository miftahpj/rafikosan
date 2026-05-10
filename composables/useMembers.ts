// composables/useMembers.ts
export interface Member {
  id: string
  name: string
  role: string
  info: string
  skills: string[]       // array of skill strings
  avatar_url: string | null
  order_index: number    // urutan tampil di grid
  created_at?: string
}

export const useMembers = () => {
  const supabase = useSupabaseClient()

  const members = ref<Member[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchMembers() {
    loading.value = true
    error.value = null

    const { data, error: err } = await supabase
      .from('members')
      .select('*')
      .order('order_index', { ascending: true })

    if (err) {
      error.value = err.message
    } else {
      members.value = data as Member[]
    }

    loading.value = false
  }

  return {
    members,
    loading,
    error,
    fetchMembers,
  }
}
