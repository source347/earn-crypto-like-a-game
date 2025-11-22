export enum CategoryType {
  INSTANT = "INSTANT_LOOT",
  PASSIVE = "PASSIVE_INCOME",
  GAMING = "ARCADE_MODE",
  TASKS = "QUEST_BOARD",
  LONGTERM = "HODL_VAULT",
  TOOLS = "GEAR_SHOP"
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string;
  category: CategoryType;
  tags: string[];
  color: string;
  icon?: string;
  isHot?: boolean;
}

export interface CategoryMeta {
  id: CategoryType;
  label: string;
  description: string;
  icon: string; // Using emoji or string identifier for simplicity
  gradient: string;
}