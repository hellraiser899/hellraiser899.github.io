<template>
  <div id="gradient-bg">
    <slot/>
  </div>
</template>

<style>
#gradient-bg {
  background: linear-gradient(-45deg,  #d8cfe8, #d2e0e5, #d9eae6);
}
</style>