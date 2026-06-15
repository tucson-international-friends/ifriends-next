<script>
  // Signup modal — the only interactive JS island.
  // Mirrors components/Action/signup.jsx: a button opens a modal offering
  // Student / Host applications, each opening a Google Form in a new tab.
  let { label = "Join Us", size = undefined } = $props();

  let open = $state(false);

  const STUDENT_FORM = "https://forms.gle/1zBXjhhCE58AeTK78";
  const HOST_FORM = "https://forms.gle/5t7WxJZydsZJJKRX6";

  const sizeClass = $derived(size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2");

  function openStudent() {
    window.open(STUDENT_FORM, "_blank");
    open = false;
  }
  function openHost() {
    window.open(HOST_FORM, "_blank");
    open = false;
  }
</script>

<button
  class={`inline-block font-heading font-bold uppercase border-2 rounded ${sizeClass} bg-highlight border-highlight text-dark-shades hover:bg-highlight/90 shadow-elevation-1 cursor-pointer`}
  onclick={() => (open = true)}
>
  {label}
</button>

{#if open}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-[100] bg-black/50 flex items-start justify-center p-4 pt-24"
    onclick={() => (open = false)}
    role="presentation"
  >
    <!-- Dialog -->
    <div
      class="bg-white rounded shadow-elevation-2 w-full max-w-md"
      onclick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-label="Join Us"
    >
      <div
        class="flex items-center justify-between border-b border-gray-200 px-4 py-3"
      >
        <span class="font-heading font-bold uppercase">Join Us</span>
        <button
          class="text-2xl leading-none text-gray-500 hover:text-gray-800 cursor-pointer"
          aria-label="Close"
          onclick={() => (open = false)}
        >
          &times;
        </button>
      </div>
      <div class="p-4">
        <p class="mb-4">Choose one of the following applications:</p>
        <button
          class="block w-full mb-3 font-heading font-bold uppercase border-2 rounded px-6 py-3 text-lg bg-main-brand border-main-brand text-white hover:bg-main-brand/90 shadow-elevation-1 cursor-pointer"
          onclick={openStudent}
        >
          Student
        </button>
        <button
          class="block w-full font-heading font-bold uppercase border-2 rounded px-6 py-3 text-lg bg-main-brand border-main-brand text-white hover:bg-main-brand/90 shadow-elevation-1 cursor-pointer"
          onclick={openHost}
        >
          Host
        </button>
      </div>
    </div>
  </div>
{/if}
