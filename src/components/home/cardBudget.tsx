import { theme } from '@/theme/theme';
import { Budget } from '@/types/budget.type';
import { StyleSheet, Text, View } from 'react-native';

type BudgetProps = {
  budget: Budget;
};

const Tag = ({ status }: { status: string }) => {
  return (
    <View style={[styles.tagContainer, styleStatus[status]?.tagContainer]}>
      <View style={[styles.tagCircle, styleStatus[status]?.tagCircle]} />
      <Text style={[styles.tagLabel, styleStatus[status]?.tagLabel]}>
        {status}
      </Text>
    </View>
  );
};

export const CardBudget = ({ budget }: BudgetProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{budget.title}</Text>
        <Text style={styles.subtitle}>{budget.client}</Text>
      </View>
      <View style={styles.info}>
        <Tag status={budget.status} />
        <Text>R$ 22.300,00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    padding: 16,
    backgroundColor: theme.colors.gray_100,
    borderWidth: 1,
    borderColor: theme.colors.gray_200,
    width: '100%',
    borderRadius: 10,
  },
  text: {
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    color: theme.colors.gray_700,
    maxWidth: 215,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    color: theme.colors.gray_600,
    maxWidth: 215,
  },
  info: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  tagContainer: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tagCircle: {
    width: 8,
    height: 8,
    borderRadius: 50,
  },
  tagLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 700,
  },
});

const styleStatus = {
  Aprovado: {
    tagContainer: {
      backgroundColor: theme.colors.sucess_light,
    },
    tagCircle: {
      backgroundColor: theme.colors.sucess_base,
    },
    tagLabel: {
      color: theme.colors.sucess_dark,
    },
  },
  Rascunho: {
    tagContainer: {
      backgroundColor: theme.colors.gray_300,
    },
    tagCircle: {
      backgroundColor: theme.colors.gray_400,
    },
    tagLabel: {
      color: theme.colors.gray_500,
    },
  },
  Enviado: {
    tagContainer: {
      backgroundColor: theme.colors.info_light,
    },
    tagCircle: {
      backgroundColor: theme.colors.info_base,
    },
    tagLabel: {
      color: theme.colors.info_dark,
    },
  },
  Recusado: {
    tagContainer: {
      backgroundColor: theme.colors.danger_light,
    },
    tagCircle: {
      backgroundColor: theme.colors.danger_base,
    },
    tagLabel: {
      color: theme.colors.danger_dark,
    },
  },
};
