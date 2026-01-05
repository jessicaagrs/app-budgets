import Checkbox from 'expo-checkbox';
import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Input, Tag } from '@/components/common';
import { Header } from '@/components/edit';
import { IconInfo } from '@/components/edit/iconInfo';
import { IconStatus } from '@/components/edit/iconStatus';

import { BudgetStatus } from '@/enum/enum';
import { theme } from '@/theme/theme';

export default function EditScreen() {
  const [selectedStatus, setSelectedStatus] = useState<BudgetStatus | null>(
    null
  );
  const statuses = useMemo(
    () => [
      BudgetStatus.RASCUNHO,
      BudgetStatus.ENVIADO,
      BudgetStatus.APROVADO,
      BudgetStatus.RECUSADO,
    ],
    []
  );

  const toggleStatus = useCallback(
    (status: BudgetStatus, nextValue: boolean) => {
      setSelectedStatus(prev => {
        if (nextValue) return status;
        if (prev === status) return null;
        return prev;
      });
    },
    []
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerFields}>
        <View style={styles.infoText}>
          <IconInfo />
          <Text>Informações gerais</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            showIcon={false}
            placeholder='Título'
            value=''
            onChange={() => {}}
          />
          <Input
            showIcon={false}
            placeholder='Cliente'
            value=''
            onChange={() => {}}
          />
        </View>
      </View>
      <View style={[styles.containerFields, { height: 150 }]}>
        <View style={styles.infoText}>
          <IconStatus />
          <Text>Status</Text>
        </View>
        <View style={styles.statusContainer}>
          {statuses.map(status => (
            <View
              key={String(status)}
              style={styles.filterList}
            >
              <Checkbox
                style={styles.checkbox}
                value={selectedStatus === status}
                onValueChange={(newValue: boolean) =>
                  toggleStatus(status, newValue)
                }
              />
              <Tag status={status} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
  },
  containerFields: {
    gap: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray_200,
    height: 180,
    padding: 16,
    borderRadius: 16,
  },
  infoText: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  inputContainer: {
    gap: 12,
  },
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '50%',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: theme.colors.gray_400,
    borderWidth: 1,
    borderRadius: 4,
  },
});
