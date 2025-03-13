<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const menuItems = ref([
  { name: "Dashboard", icon: "🏠", route: "/" },
  { name: "Patients", icon: "💉", route: "/patients" },
  { name: "Reminders", icon: "📌", route: "/reminders" },
  { name: "Report", icon: "📝", route: "/report" },
  { name: "Schedule", icon: "📆", route: "/schedule" },
  { name: "Settings", icon: "⚙️", route: "/settings" },
]);


  const isCollapsed = ref(false);

  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
  };
</script>

<template>
  <div class="container">
    <aside :class="['sidebar', { collapsed: isCollapsed }]">
      <button class="toggle-btn" @click="toggleSidebar">
        {{ isCollapsed ? '☰' : 'x' }}
      </button>
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.name" class="menu-item" @click="router.push(item.route)">
          <span class="icon">{{ item.icon }}</span>
          <span v-if="!isCollapsed" class="text">{{ item.name }}</span>
        </li>
      </ul>
    </aside>

    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  background-color: #F5EFE8;
  color: #2F4156;
  width: 100vw;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background: #2F4156;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.2);
  transition: width 0.3s ease-in-out, padding 0.3s ease-in-out;
  color: white;
}

.sidebar.collapsed {
  width: 60px;
  padding: 10px;
  align-items: center;
}

.sidebar-title {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  transition: opacity 0.3s ease-in-out;
}

.menu {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, padding 0.3s ease-in-out;
}

.menu-item:hover {
  background: #567C8D;
}

.icon {
  font-size: 18px;
  margin-right: 12px;
  transition: margin-right 0.3s ease-in-out;
}

.sidebar.collapsed .icon {
  margin-right: 0;
}

.sidebar.collapsed .menu-item {
  justify-content: center;
}

.sidebar.collapsed .text {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.content {
  flex: 1;
  padding: 25px;
  transition: margin-left 0.3s ease-in-out;
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
  align-self: flex-end;
  transition: transform 0.3s ease-in-out;
}

.sidebar.collapsed .toggle-btn {
  transform: rotate(180deg);
}

@media (max-width: 768px) {
  .sidebar {
    width: 60px;
    padding: 10px;
  }

  .sidebar-title {
    display: none;
  }

  .menu-item {
    padding-top: 40px;
    justify-content: center;
  }

  .menu-item .text {
    display: none;
  }
}

@media (max-width: 480px) {
  .container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
  }

  .menu {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .menu-item {
    flex-direction: column;
    align-items: center;
    padding: 8px;
  }

  .menu-item .text {
    display: block;
    font-size: 12px;
  }

  .toggle-btn {
    display: none;
  }
}
</style>
