import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CardBudget } from './cardBudget';

import { getBudgets } from '@/services/budget.service';

import { Budget } from '@/types/budget.type';

export default function ListBudgets() {
  const [loading, setLoading] = useState(true);
  const [budgets, setBudgets] = useState<Budget[]>([]);

  useEffect(() => {
    getBudgets().then(data => {
      setBudgets(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Text>Carregando orçamentos...</Text>;
  }

  return (
    <FlatList
      data={budgets}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <CardBudget budget={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 8,
  },
});
