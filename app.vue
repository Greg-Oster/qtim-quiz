<template>
  <NuxtLoadingIndicator />
  <div class="app container">
    <header id="masthead" class="site-header">
			<TheBranding/>
			<TheNav/>
		</header>
    <div class="wrapper">
      <NuxtPage/>
    </div>
  </div>
  <TheFooter/>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .wrapper {
    flex: 1;
  }
</style>
